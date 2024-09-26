import { App } from './App'
import { HomeModule } from './ui/modules/HomeModule/HomeModule'
import { SettingsModule } from './ui/modules/SettingsModule/SettingsModule'
import { OnboardingModule } from './ui/modules/OnboardingModule/OnboardingModule'

const app = new App();
app.addModule(new OnboardingModule())
app.addModule(new HomeModule())
app.addModule(new SettingsModule())
app.start()
