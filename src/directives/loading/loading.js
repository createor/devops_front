import Loading from '@/components/Loading'
import { h, render } from "Vue"

export default {
    update(el, { value }) {
        let vNode = h(Loading);
        if (value) {
            render(vNode, el)
            el.append(vNode, el)
        } else {
            el.removeChild(vNode, el)
        }
    }
}