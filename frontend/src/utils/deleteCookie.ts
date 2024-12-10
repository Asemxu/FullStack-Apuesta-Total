import type { ActionAPIContext } from "astro:actions";

const deleteCookie = (context: ActionAPIContext) => {
    context.cookies.set('user','', { path: '/', expires: new Date(0)})
}

export default deleteCookie;