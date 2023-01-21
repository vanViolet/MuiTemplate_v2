import { IconCollection } from 'Assets/Collections/IconCollection'
import { CreateElements } from 'Components/CreateElements/CreateElements'
import { sidebarToggle } from 'Core/Reducers'

const MainLayout = () => {
  function Header() {
    return CreateElements(({ burgerToggle, dispatch }) => {
      const SCHEMA = [{ child: IconCollection('Hamburger', 'HeroSize') }]
      return [{ type: 'Box' }]
    })
  }
  return CreateElements(({ burgerToggle, dispatch }) => {
    return [
      {
        type: 'Box',
        props: { sx: { backgroundColor: 'red', height: '3rem', position: 'fixed', top: 0, left: 0, right: 0, display: 'flex' } },
        child: [
          {
            type: 'Box',
            CSS: ({ BURGER_TOGGLE_IN_HEADER }) => BURGER_TOGGLE_IN_HEADER(burgerToggle),
            props: { onClick: () => dispatch(sidebarToggle()) },
            child: IconCollection('Hamburger', 'HeroSize'),
          },
          { type: 'Box', props: { flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }, child: 'Title' },
          { type: 'Box', props: { width: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }, child: 'User' },
        ],
      },
    ]
  })
}
export default MainLayout
