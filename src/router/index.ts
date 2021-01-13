import {nanoid} from "nanoid"
import Home from "../views/Home"

type TRouter = {
  keyId: string
  path: string
  exact: boolean
  component: () => JSX.Element
}

const router: TRouter[] = [{
  keyId: nanoid(),
  path: '',
  exact: true,
  component: Home
}]

export default router