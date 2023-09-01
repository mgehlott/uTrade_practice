import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {UtradeI18nProvider} from './utrade/i18n/Utrade18n'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './utrade/assets/css/style.rtl.css'
 **/
import './utrade/assets/sass/style.scss'
import './utrade/assets/sass/plugins.scss'
import './utrade/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject your interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)
const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <UtradeI18nProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </UtradeI18nProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
