import { SettingsState } from './types'

export default {
  getMessage(state: SettingsState): string {
    return state.hello
  }
}
