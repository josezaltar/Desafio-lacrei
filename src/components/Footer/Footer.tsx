'use client'

import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import {
  FooterWrapper,
  FooterInner,
  FooterTop,
  FooterBrand,
  FooterTagline,
  FooterNav,
  FooterNavTitle,
  FooterNavLink,
  FooterDivider,'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Logo } from '@/components/Logo/Logo'
import {
  FooterWrapper,
  FooterInner,
  FooterSimpleTop,
  FooterLogoLink,
  FooterSimpleNav,
  FooterSimpleList,
  FooterSimpleItem,
  FooterLink,
  FooterInstitucionalTop,
  FooterColTitle,
  FooterColList,
  FooterColItem,
  FooterSocial,
  SocialButton,
  FooterDivider,
  FooterCVV,
  FooterBottom,
  FooterLegal,
  BackToTopButton,
} from './styles'

// ----------------------------------------------------------
// Dados de navegação
// ----------------------------------------------------------
const SIMPLE_LINKS = [
  { href: '/',                  label: 'Lacrei Saúde'          },
  { href: '/profissionais',     label: 'Pessoas Profissionais' },
  { href: '/privacidade',       label: 'Política de Privacidade' },
  { href: '/termos',            label: 'Termos de Uso'         },
]

const INSTITUCIONAL_COLS = [
  {
    title: 'Lacrei Saúde',
    links: [
      { href: '/quem-somos',    label: 'Quem Somos'        },
      { href: '/proposito',     label: 'Nosso Propósito'   },
      { href: '/missao',        label: 'Missão, Visão e Valor' },
      { href: '/acessibilidade',label: 'Acessibilidade'    },
    ],
  },
  {
    title: 'Saúde',
    links: [
      { href: '/buscar',        label: 'Buscar atendimento'  },
      { href: '/oferecer',      label: 'Oferecer atendimento' },
    ],
  },
  {
    title: 'Segurança e Privacidade',
    links: [
      { href: '/privacidade',   label: 'Política de Privacidade' },
      { href: '/termos',        label: 'Termos de Uso'           },
      { href: '/titular',       label: 'Direitos de Titular'     },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    href:  'https://facebook.com/lacreisaude',
    label: 'Facebook site externo — abrirá uma nova janela',
    icon:  'facebook',
  },
  {
    href:  'https://instagram.com/lacreisaude',
    label: 'Instagram site externo — abrirá uma nova janela',
    icon:  'photo_camera',
  },
  {
    href:  'https://linkedin.com/company/lacreisaude',
    label: 'LinkedIn site externo — abrirá uma nova janela',
    icon:  'work',
  },
  {
    href:  'mailto:contato@lacreisaude.com.br',
    label: 'E-mail site externo — abrirá uma nova janela com seu e-mail como remetente e a Lacrei Saúde como destinatário',
    icon:  'mail',
  },
]

// ----------------------------------------------------------
// Props
// ----------------------------------------------------------
interface FooterProps {
  variant?: 'simples' | 'institucional'
}

// ----------------------------------------------------------
// Componente
// ----------------------------------------------------------
export function Footer({ variant = 'simples' }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const currentYear = new Date().getFullYear()

  // Mostra botão "voltar ao topo" quando scroll >= 100px
  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY >= 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterWrapper role="contentinfo">
      <FooterInner>

        {/* ---- VARIANTE SIMPLES (profissional/usuária) ---- */}
        {variant === 'simples' && (
          <>
            <FooterSimpleTop>
              {/* Logo horizontal verde */}
              <FooterLogoLink href="/" as={Link} aria-label="Lacrei Saúde — página inicial">
                <Logo variant="horizontal" color="green" width={120} height={48} />
              </FooterLogoLink>

              {/* Links em linha — ul > li (HTML semântico conforme Figma) */}
              <FooterSimpleNav aria-label="Links do rodapé">
                <FooterSimpleList>
                  {SIMPLE_LINKS.map(({ href, label }) => (
                    <FooterSimpleItem key={href}>
                      <FooterLink href={href} as={Link}>{label}</FooterLink>
                    </FooterSimpleItem>
                  ))}
                </FooterSimpleList>
              </FooterSimpleNav>
            </FooterSimpleTop>

            {/* Redes sociais */}
            <FooterSocial aria-label="Redes sociais da Lacrei Saúde">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <SocialButton
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{ fontSize: '24px' }}
                  >
                    {icon}
                  </span>
                </SocialButton>
              ))}
            </FooterSocial>

            <FooterDivider />

            <FooterBottom>
              <FooterLegal>
                CNPJ: 51.265.351/0001-65
              </FooterLegal>
              <BackToTopButton
                $visible={showBackToTop}
                onClick={handleBackToTop}
                aria-label="voltar ao topo da página"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                  style={{ fontSize: '20px' }}
                >
                  keyboard_arrow_up
                </span>
              </BackToTopButton>
            </FooterBottom>
          </>
        )}

        {/* ---- VARIANTE INSTITUCIONAL ---- */}
        {variant === 'institucional' && (
          <>
            <FooterInstitucionalTop>
              {/* Logo + redes sociais — primeira coluna */}
              <div>
                <FooterLogoLink href="/" as={Link} aria-label="Lacrei Saúde — página inicial">
                  <Logo variant="horizontal" color="green" width={120} height={48} />
                </FooterLogoLink>
                <FooterSocial aria-label="Redes sociais da Lacrei Saúde">
                  {SOCIAL_LINKS.map(({ href, label, icon }) => (
                    <SocialButton
                      key={href}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className="material-symbols-outlined"
                        aria-hidden="true"
                        style={{ fontSize: '24px' }}
                      >
                        {icon}
                      </span>
                    </SocialButton>
                  ))}
                </FooterSocial>
              </div>

              {/* 3 colunas de links — h2 + ul > li */}
              {INSTITUCIONAL_COLS.map(({ title, links }) => (
                <nav key={title} aria-label={title}>
                  <FooterColTitle>{title}</FooterColTitle>
                  <FooterColList>
                    {links.map(({ href, label }) => (
                      <FooterColItem key={href}>
                        <FooterLink href={href} as={Link}>{label}</FooterLink>
                      </FooterColItem>
                    ))}
                  </FooterColList>
                </nav>
              ))}
            </FooterInstitucionalTop>

            <FooterDivider />

            {/* Aviso CVV — obrigatório no footer institucional */}
            <FooterCVV>
              A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.{' '}
              Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site{' '}
              <FooterLink
                href="https://cvv.org.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="centro de valorização da vida link externo — o link abre uma nova janela"
              >
                https://cvv.org.br
              </FooterLink>
            </FooterCVV>

            <FooterBottom style={{ marginTop: '16px' }}>
              <FooterLegal>
                Copyright © {currentYear} Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
              </FooterLegal>
              <BackToTopButton
                $visible={showBackToTop}
                onClick={handleBackToTop}
                aria-label="voltar ao topo da página"
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                  style={{ fontSize: '20px' }}
                >
                  keyboard_arrow_up
                </span>
              </BackToTopButton>
            </FooterBottom>
          </>
        )}

      </FooterInner>
    </FooterWrapper>
  )
}
  FooterBottom,
  FooterSocial,
  SocialLink,
  FooterLegal,
} from './styles'

const FOOTER_LINKS = [
  {
    title: 'Lacrei Saúde',
    links: [
      { href: '/',              label: 'Início'             },
      { href: '/sobre',         label: 'Sobre nós'          },
      { href: '/profissionais', label: 'Pessoas Profissionais' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacidade',   label: 'Política de Privacidade' },
      { href: '/termos',        label: 'Termos de Uso'           },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { href: '/ajuda',         label: 'Central de Ajuda'  },
      { href: '/contato',       label: 'Fale Conosco'      },
    ],
  },
]

// Ícones do Material Symbols (Google) — peso 400, 20px
const SOCIAL_LINKS = [
  {
    href:  'https://facebook.com/lacreisaude',
    label: 'Facebook da Lacrei Saúde',
    icon:  'facebook',
  },
  {
    href:  'https://instagram.com/lacreisaude',
    label: 'Instagram da Lacrei Saúde',
    icon:  'photo_camera',
  },
  {
    href:  'https://linkedin.com/company/lacreisaude',
    label: 'LinkedIn da Lacrei Saúde',
    icon:  'work',
  },
  {
    href:  'mailto:contato@lacreisaude.com.br',
    label: 'E-mail da Lacrei Saúde',
    icon:  'mail',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper role="contentinfo">
      <FooterInner>

        <FooterTop>
          {/* Logo — Horizontal Verde (footer desktop, conforme Marsha DS) */}
          <FooterBrand>
            <Link href="/" aria-label="Lacrei Saúde — página inicial">
              <Logo
                variant="horizontal"
                color="green"
                width={120}
                height={48}
              />
            </Link>
            <FooterTagline>
              Saúde inclusiva e acessível para a comunidade LGBTQIA+.
            </FooterTagline>
          </FooterBrand>

          {/* Links de navegação do footer */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <FooterNav key={title} aria-label={title}>
              <FooterNavTitle>{title}</FooterNavTitle>
              {links.map(({ href, label }) => (
                <FooterNavLink
                  key={href}
                  href={href}
                  as={Link}
                >
                  {label}
                </FooterNavLink>
              ))}
            </FooterNav>
          ))}
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          {/* Redes sociais */}
          <FooterSocial aria-label="Redes sociais da Lacrei Saúde">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <SocialLink
                key={href}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                  style={{ fontSize: '20px' }}
                >
                  {icon}
                </span>
              </SocialLink>
            ))}
          </FooterSocial>

          {/* CNPJ e copyright */}
          <FooterLegal>
            CNPJ 51.265.950/0001-65 — © {currentYear} Lacrei Saúde. Todos os direitos reservados.
          </FooterLegal>
        </FooterBottom>

      </FooterInner>
    </FooterWrapper>
  )
}