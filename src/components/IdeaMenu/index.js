import './index.scss'

export default function IdeaMenu({
  postId,
  openMenu,
  handleOpenMenu,
  handleNavigate
}) {
  return (
    <section className={`idea__menu ${openMenu && 'show-menu'}`}>
      <section>
        <button onClick={(e) => handleNavigate(e, postId)}>Eliminar</button>
      </section>
      <button type='button' onClick={handleOpenMenu}>
        Cerrar menú
      </button>
    </section>
  )
}
