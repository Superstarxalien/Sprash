const CrashRoles =
{
	crash:
	{
		label: "Team Crash",
		value: "1132130033637527622",
		description: "I like Crash Bandicoot!",
	},
	cortex:
	{
		label: "Team Cortex",
		value: "1132665983488753747",
		description: "I like Dr. Neo Cortex!",
	},
}

const SpyroRoles =
{
	spyro:
	{
		label: "Team Spyro",
		value: "1132130177867055154",
		description: "I like Spyro the Dragon!",
	},
	gnasty:
	{
		label: "Team Gnasty Gnorc",
		value: "1132666215291162684",
		description: "I like Gnasty Gnorc!",
	},
}

export function getRoles(roles)
{
	return Object.keys(roles)
}

export function getRoleOptions()
{
	const crashroles = getRoles(CrashRoles)
	const spyroroles = getRoles(SpyroRoles)
	const options = []

	for (let c of crashroles)
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
	for (let c of spyroroles)
	{
		// Formatted for select menus
   		// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
		options.push
		(
			{
				label: SpyroRoles[c]["label"],
				value: SpyroRoles[c]["value"],
				description: SpyroRoles[c]["description"],
			}
		)
	}

	return options
}
