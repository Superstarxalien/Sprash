const CrashRoles =
{
	// role id: 1132130033637527622
	crash:
	{
		label: "Team Crash",
		value: "1132130033637527622",
		description: "I like Crash Bandicoot!",
	},
	// role id: 1132130177867055154
	spyro:
	{
		label: "Team Spyro",
		value: "1132130177867055154",
		description: "I like Spyro the Dragon!",
	},
}

export function getRoles()
{
	return Object.keys(CrashRoles)
}

export function getRoleOptions()
{
	const roles = getRoles()
	const options = []

	for (let c of roles)
	{
		// Formatted for select menus
   		// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
		options.push
		(
			{
				label: CrashRoles[c]["label"],
				value: CrashRoles[c]["value"],
				description: CrashRoles[c]["description"],
			}
		)
	}

	return options
}