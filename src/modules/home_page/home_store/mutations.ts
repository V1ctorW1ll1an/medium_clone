import { SettingsState } from './types'

export default {
  setMessage(state: SettingsState, message: string): void {
    state.hello = message
  }
}
