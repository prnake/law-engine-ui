import ElementPlus from 'element-plus'
import type { UserModule } from '~/types'

import 'element-plus/dist/index.css'

export const install: UserModule = ({ isClient, app }) => {
    if (!isClient)
        return
    
    app.use(ElementPlus)
}
