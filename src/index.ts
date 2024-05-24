import ThemedImage from "@/components/themed-image"
import FAlert from "@/components/alert"
import {ThemeProvider} from "./components/theme-provider"
import {ThemeSwitch} from "./components/theme-switch"
import {LocalTime} from "./components/localtime"
import LanguageSelect from "./components/language-select"
import TooltipWrapper from "./components/tooltip-wrapper"

// Custom extended components
export {
  ThemedImage,
  ThemeSwitch,
  ThemeProvider,
  LocalTime,
  LanguageSelect,
  TooltipWrapper,
  FAlert
}

// Shadcn components
export {Alert, AlertTitle, AlertDescription} from "./components/ui/alert"
export {Avatar, AvatarImage, AvatarFallback} from "./components/ui/avatar"
export {Badge, badgeVariants} from "./components/ui/badge"
export {Button, buttonVariants} from "./components/ui/button"
export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from "./components/ui/card"
export {Checkbox} from "./components/ui/checkbox"
export {Combobox} from "./components/ui/combobox";
export * from "./components/ui/command"
export * from "./components/ui/dialog"
export * from "./components/ui/dropdown-menu";
export * from "./components/ui/hover-card"
export * from "./components/ui/popover"
export * from "./components/ui/scroll-area"
export * from "./components/ui/separator"
export * from "./components/ui/skeleton"
export * from "./components/ui/tabs"
export * from "./components/ui/toast"
export * from "./components/ui/toaster"
export * from "./components/ui/tooltip"

// Default values
export {defaultEditorContent, defaultFormState} from "./defaults"
export * from "./types"

