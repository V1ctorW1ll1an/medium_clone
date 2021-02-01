import { SettingsState } from './types'

export default {
  getHeaderBg(state: SettingsState): string {
    return state.headerBg
  },
  getHeaderBtnBg(state: SettingsState): string {
    return state.headerBtnBg
  }
}
