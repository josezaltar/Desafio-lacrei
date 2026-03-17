'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Logo } from '@/components/Logo/Logo'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
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

const SIMPLE_LINKS = [
  { href: '/',              label: 'Lacrei Saúde'            },
  { href: '/profissionais', label: 'Pessoas Profissionais'   },
  { href: '/privacidade',   label: 'Política de Privacidade' },
  { href: '/termos',        label: 'Termos de Uso'           },
]

const INSTITUCIONAL_COLS = [
  {
    title: 'Lacrei Saúde',
    links: [
      { href: '/quem-somos',     label: 'Quem Somos'           },
      { href: '/proposito',      label: 'Nosso Propósito'       },
      { href: '/missao',         label: 'Missão, Visão e Valor' },
      { href: '/acessibilidade', label: 'Acessibilidade'        },
    ],
  },
  {
    title: 'Saúde',
    links: [
      { href: '/buscar',   label: 'Buscar atendimento'   },
      { href: '/oferecer', label: 'Oferecer atendimento' },
    ],
  },
  {
    title: 'Segurança e Privacidade',
    links: [
      { href: '/privacidade', label: 'Política de Privacidade' },
      { href: '/termos',      label: 'Termos de Uso'           },
      { href: '/titular',     label: 'Direitos de Titular'     },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    href:  'https://facebook.com/lacreisaude',
    label: 'Facebook site externo — abrirá uma nova janela',
    icon:  <FaFacebookF size={20} />,
  },
  {
    href:  'https://instagram.com/lacreisaude',
    label: 'Instagram site externo — abrirá uma nova janela',
    icon:  <FaInstagram size={20} />,
  },
  {
    href:  'https://linkedin.com/company/lacreisaude',
    label: 'LinkedIn site externo — abrirá uma nova janela',
    icon:  <FaLinkedinIn size={20} />,
  },
  {
    href:  'mailto:contato@lacreisaude.com.br',
    label: 'E-mail site externo — abrirá uma nova janela com seu e-mail como remetente e a Lacrei Saúde como destinatário',
    icon:  <MdEmail size={22} />,
  },
]

interface FooterProps {
  variant?: 'simples' | 'institucional'
}

export function Footer({ variant = 'simples' }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const currentYear = new Date().getFullYear()

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

        {variant === 'simples' && (
          <>
            <FooterSimpleTop>
              <FooterLogoLink href="/" as={Link} aria-label="Lacrei Saúde — página inicial">
                <Logo variant="horizontal" color="green" width={120} height={48} />
              </FooterLogoLink>

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

            <FooterSocial aria-label="Redes sociais da Lacrei Saúde">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <SocialButton
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </SocialButton>
              ))}
            </FooterSocial>

            <FooterDivider />

            <FooterBottom>
              <FooterLegal>CNPJ: 51.265.351/0001-65</FooterLegal>
              <BackToTopButton
                $visible={showBackToTop}
                onClick={handleBackToTop}
                aria-label="voltar ao topo da página"
              >
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>
                  keyboard_arrow_up
                </span>
              </BackToTopButton>
            </FooterBottom>
          </>
        )}

        {variant === 'institucional' && (
          <>
            <FooterInstitucionalTop>
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
                      {icon}
                    </SocialButton>
                  ))}
                </FooterSocial>
              </div>

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
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '20px' }}>
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