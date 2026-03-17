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
  FooterDivider,
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