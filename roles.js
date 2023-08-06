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
	papu:
	{
		label: "Team Papu Papu",
		value: "1137767234639499374",
		description: "I like Papu Papu!",
	},
	roo:
	{
		label: "Team Ripper Roo",
		value: "1137765320912814200",
		description: "I like Ripper Roo!",
	},
	pinstripe:
	{
		label: "Team Pinstripe",
		value: "1137773539378872331",
		description: "I like Pinstripe Potoroo!",
	},
	lab_assistant:
	{
		label: "Team Lab Assistant",
		value: "1137767821850452070",
		description: "I like the Lab Assistant!",
	},
	coco:
	{
		label: "Team Coco",
		value: "1137764619906207754",
		description: "I like Coco Bandicoot!",
	},
	polar:
	{
		label: "Team Polar",
		value: "1137772953996640256",
		description: "I like Polar!",
	},
	tiny:
	{
		label: "Team Tiny",
		value: "1137768808069730365",
		description: "I like Tiny Tiger!",
	},
	fake_crash:
	{
		label: "Team Fake Crash",
		value: "1137778730908004383",
		description: "I like Fake Crash!",
	},
	dingodile:
	{
		label: "Team Dingodile",
		value: "1137768976726884382",
		description: "I like Dingodile!",
	},
	n_tropy:
	{
		label: "Team N. Tropy",
		value: "1137779504601903185",
		description: "I like Dr. Nefarious Tropy!",
	},
	velo:
	{
		label: "Team Velo",
		value: "1137767348804272158",
		description: "I like Emperor Velo XXVII!",
	},
	akano:
	{
		label: "Team Akano",
		value: "1137770251271028849",
		description: "I like Akano!",
	},
	ika_ika:
	{
		label: "Team Ika-Ika",
		value: "1137763366010630165",
		description: "I like Ika-Ika!",
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
	sparx:
	{
		label: "Team Sparx",
		value: "1137767683740409927",
		description: "I like Sparx!",
	},
	gnasty:
	{
		label: "Team Gnasty Gnorc",
		value: "1132666215291162684",
		description: "I like Gnasty Gnorc!",
	},
	elora:
	{
		label: "Team Elora",
		value: "1137772506997067816",
		description: "I like Elora!",
	},
	hunter:
	{
		label: "Team Hunter",
		value: "1137769829298864220",
		description: "I like Hunter!",
	},
	zoe:
	{
		label: "Team Zoe",
		value: "1137779876678619257",
		description: "I like Zoe!",
	},
	moneybags:
	{
		label: "Team Moneybags",
		value: "1137773234486530209",
		description: "I like Moneybags!",
	},
	professor:
	{
		label: "Team Professor",
		value: "1137767958735753277",
		description: "I like the Professor!",
	},
	ripto:
	{
		label: "Team Ripto",
		value: "1137771933174353940",
		description: "I like Ripto!",
	},
	sheila:
	{
		label: "Team Sheila",
		value: "1137768183965692076",
		description: "I like Sheila!",
	},
	bentley:
	{
		label: "Team Bentley",
		value: "1137778573009244302",
		description: "I like Bentley!",
	},
	sgt_byrd:
	{
		label: "Team Sgt. Byrd",
		value: "1137772807414091846",
		description: "I like Sgt. Byrd!",
	},
	agent_9:
	{
		label: "Team Agent 9",
		value: "1137778843172737044",
		description: "I like Agent 9!",
	},
	sung:
	{
		label: "Team Sung",
		value: "1137779786559787068",
		description: "I like Sung from Spyro: Season of Ice!",
	},
	cynder:
	{
		label: "Team Cynder",
		value: "1137769904649547887",
		description: "I like Cynder!",
	},
}

export function getRoles(roles)
{
	return Object.keys(roles)
}

export function getRoleOptions(franchise)
{
	const crashroles = getRoles(CrashRoles)
	const spyroroles = getRoles(SpyroRoles)
	const options = []

	if (franchise == "crash")
	{
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
	}

	if (franchise == "spyro")
	{
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
	}

	return options
}

export function getAllRoles()
{
	const crashroles = getRoles(CrashRoles)
	const spyroroles = getRoles(SpyroRoles)
	const options = []

	for (let c of crashroles)
	{
		// Formatted for select menus
   		// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
		options.push(CrashRoles[c]["value"])
	}

	for (let c of spyroroles)
	{
		// Formatted for select menus
   		// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
		options.push(SpyroRoles[c]["value"])
	}

	return options
}