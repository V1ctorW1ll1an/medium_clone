import { SettingsState } from './types'

export default {
  setHeaderBg(state: SettingsState, headerBg: string): void {
    state.headerBg = headerBg
  },
  setHeaderBtnBg(state: SettingsState, headerBtnBg: string): void {
    state.headerBtnBg = headerBtnBg
  }
}
