import * as S from './styled'

const Footer = () => {
  return (
    <S.Container
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '20%' }
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeInOut' }}
    >
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>

      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </S.Container>
  )
}

export default Footer
