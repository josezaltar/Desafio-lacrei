'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Logo } from '@/components/Logo/Logo'
import {
  HeaderWrapper,
  HeaderInner,
  LogoLink,
  DesktopNav,
  NavLink,
  SearchWrapper,
  SearchInput,
  SearchClearButton,
  SearchButton,
  HeaderActions,
  HelpButton,
  HelpIconButton,
  EntrarButton,
  AvatarButton,
  AvatarCircle,
  LogoutButton,
  Popover,
  PopoverItem,
  PopoverAnchor,
} from './styles'

interface User {
  name:       string
  avatarUrl?: string
  type:       'paciente' | 'profissional'
}

interface HeaderProps {
  user?:      User
  onLogout?:  () => void
  onSearch?:  (query: string) => void
}

export function Header({ user, onLogout, onSearch }: HeaderProps) {
  const pathname                        = usePathname()
  const [popoverOpen, setPopoverOpen]   = useState(false)
  const [searchQuery, setSearchQuery]   = useState('')
  const popoverRef                      = useRef<HTMLDivElement>(null)

  /* Fecha popover ao clicar fora */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPopoverOpen(false)
      }
    }
    if (popoverOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [popoverOpen])

  /* Fecha popover com Escape */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setPopoverOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : ''

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <HeaderWrapper role="banner">
        <HeaderInner>

          {/* Logo — horizontal total / gradiente (202×24px no Figma) */}
          <LogoLink href="/" as={Link} aria-label="Lacrei Saúde — página inicial">
            <Logo variant="horizontalTotal" color="gradient" width={202} height={24} />
          </LogoLink>

          {/* ---- NÃO LOGADO ---- */}
          {!user && (
            <>
              {/* Nav: "Quem somos" e "Ajuda" — bottom link/default, 48px height */}
              <DesktopNav aria-label="Navegação principal">
                <NavLink
                  href="/quem-somos"
                  as={Link}
                  aria-current={pathname === '/quem-somos' ? 'page' : undefined}
                >
                  Quem somos
                </NavLink>
                <NavLink
                  href="/ajuda"
                  as={Link}
                  aria-current={pathname === '/ajuda' ? 'page' : undefined}
                >
                  Ajuda
                </NavLink>
              </DesktopNav>

              <HeaderActions>
                {/* Botão "?" ajuda — mobile only */}
                <HelpIconButton href="/ajuda" as={Link} aria-label="Central de ajuda">
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>
                    help
                  </span>
                </HelpIconButton>

                {/* Botão Entrar — primary button/default/icon-right
                    aria-label = "abrir opções de entrada" (conforme Figma) */}
                <PopoverAnchor ref={popoverRef}>
                  <EntrarButton
                    aria-haspopup="true"
                    aria-expanded={popoverOpen}
                    aria-controls="entrar-popover"
                    aria-label="abrir opções de entrada"
                    onClick={() => setPopoverOpen(prev => !prev)}
                  >
                    Entrar
                    {/* icon-right: expand_more */}
                    <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>
                      expand_more
                    </span>
                  </EntrarButton>

                  {popoverOpen && (
                    <Popover id="entrar-popover" role="menu" aria-label="Opções de entrada">
                      <PopoverItem
                        href="/entrar/paciente"
                        as={Link}
                        role="menuitem"
                        onClick={() => setPopoverOpen(false)}
                      >
                        <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>
                          person
                        </span>
                        Paciente
                      </PopoverItem>
                      <PopoverItem
                        href="/entrar/profissional"
                        as={Link}
                        role="menuitem"
                        onClick={() => setPopoverOpen(false)}
                      >
                        <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>
                          medical_services
                        </span>
                        Profissional
                      </PopoverItem>
                    </Popover>
                  )}
                </PopoverAnchor>
              </HeaderActions>
            </>
          )}

          {/* ---- LOGADO ---- */}
          {user && (
            <HeaderActions>
              <SearchWrapper as="form" onSubmit={handleSearch}>
                <SearchInput
                  type="search"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Ex.: Médica trans ou médico gay"
                  aria-label="Buscar profissional de saúde"
                />
                {searchQuery && (
                  <SearchClearButton type="button" aria-label="Limpar busca" onClick={() => setSearchQuery('')}>
                    <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>close</span>
                  </SearchClearButton>
                )}
                <SearchButton type="submit" aria-label="Buscar">
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>search</span>
                </SearchButton>
              </SearchWrapper>

              <HelpButton href="/ajuda" as={Link} aria-label="Central de ajuda">Ajuda</HelpButton>
              <HelpIconButton href="/ajuda" as={Link} aria-label="Central de ajuda">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>help</span>
              </HelpIconButton>

              <PopoverAnchor ref={popoverRef}>
                <AvatarButton
                  aria-haspopup="true"
                  aria-expanded={popoverOpen}
                  aria-controls="avatar-popover"
                  aria-label={`Menu de ${user.name}`}
                  onClick={() => setPopoverOpen(prev => !prev)}
                >
                  <AvatarCircle>
                    {user.avatarUrl
                      ? <img src={user.avatarUrl} alt={user.name} width={36} height={36} />
                      : initials
                    }
                  </AvatarCircle>
                  <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px', color: 'var(--color-primary)' }}>
                    {popoverOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </AvatarButton>

                {popoverOpen && (
                  <Popover id="avatar-popover" role="menu" aria-label={`Menu de ${user.name}`}>
                    <PopoverItem href="/perfil" as={Link} role="menuitem" onClick={() => setPopoverOpen(false)}>
                      <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>person</span>
                      Perfil
                    </PopoverItem>
                    <PopoverItem href="/consultas" as={Link} role="menuitem" onClick={() => setPopoverOpen(false)}>
                      <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>calendar_month</span>
                      Minhas consultas
                    </PopoverItem>
                    <PopoverItem
                      href="#"
                      role="menuitem"
                      onClick={(e) => { e.preventDefault(); setPopoverOpen(false); onLogout?.() }}
                    >
                      <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>logout</span>
                      Sair
                    </PopoverItem>
                  </Popover>
                )}
              </PopoverAnchor>

              <LogoutButton href="#" as="button" aria-label="Sair da conta"
                onClick={(e: React.MouseEvent) => { e.preventDefault(); onLogout?.() }}
              >
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>logout</span>
              </LogoutButton>
            </HeaderActions>
          )}

        </HeaderInner>
      </HeaderWrapper>
    </>
  )
}