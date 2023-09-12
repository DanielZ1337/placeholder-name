import React from "react";
import { Switch } from "@nextui-org/react";
import MoonIcon from "./icons/moon";
import SunIcon from "./icons/sun";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null



    return (
        <Switch
            isSelected={theme === "dark"}
            onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <MoonIcon className={className} />
                ) : (
                    <SunIcon className={className} />
                )
            }
        />
    );
}
