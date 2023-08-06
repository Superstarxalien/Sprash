import 'dotenv/config'
import express from 'express'
import
{
	InteractionType,
	InteractionResponseType,
	InteractionResponseFlags,
	MessageComponentTypes,
	ButtonStyleTypes,
} from 'discord-interactions'
import { VerifyDiscordRequest, DiscordRequest, ChangeUserRoles } from './utils.js'
import { getRoleOptions, getAllRoles } from "./roles.js"

// Create an express app
const app = express()
// Get port, or default to 3000
const PORT = process.env.PORT || 3000
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }))

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */
app.post('/interactions', async function (req, res)
{
	// Interaction type and data
	const { type, id, data } = req.body

	/**
	 * Handle verification requests
	 */
	if (type === InteractionType.PING)
	{
		return res.send({ type: InteractionResponseType.PONG })
	}

	/**
	 * Handle slash command requests
	 * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
	 */
	if (type === InteractionType.APPLICATION_COMMAND)
	{
		const { name } = data

		// generate role menu message
		if (name === 'roles_crash')
		{
			try
			{
				// Send a message into the channel where command was triggered from
				await res.send
				({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data:
					{
						// Fetches a random emoji to send from a helper function
						content: "crash roles:",
						components:
						[
							{
								type: MessageComponentTypes.ACTION_ROW,
								components:
								[
									{
										type: MessageComponentTypes.STRING_SELECT,
										min_values: 1,
										max_values: 1,
										custom_id: "rolethingyeah",
										options: getRoleOptions("crash"),
									},
								],
							},
						],
					},
				})
			} catch (err)
			{
				console.error("Error sending message:", err)
			}
		}
		// generate role menu message
		if (name === 'roles_spyro')
		{
			try
			{
				// Send a message into the channel where command was triggered from
				await res.send
				({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data:
					{
						// Fetches a random emoji to send from a helper function
						content: "spyro roles:",
						components:
						[
							{
								type: MessageComponentTypes.ACTION_ROW,
								components:
								[
									{
										type: MessageComponentTypes.STRING_SELECT,
										min_values: 1,
										max_values: 1,
										custom_id: "rolethingyeah",
										options: getRoleOptions("spyro"),
									},
								],
							},
						],
					},
				})
			} catch (err)
			{
				console.error("Error sending message:", err)
			}
		}
		// generate role buttons
		if (name === 'roles_interest')
		{
			try
			{
				// Send a message into the channel where command was triggered from
				await res.send
				({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data:
					{
						// Fetches a random emoji to send from a helper function
						content: "are you interested in:",
						components:
						[
							{
								type: MessageComponentTypes.ACTION_ROW,
								components:
								[
									{
										type: MessageComponentTypes.BUTTON,
										style: 1,
										label: `Interested in Crash Bandicoot`,
										custom_id: "interest_crash",
									},
									{
										type: MessageComponentTypes.BUTTON,
										style: 1,
										label: `Interested in Spyro the Dragon`,
										custom_id: "interest_spyro",
									},
								],
							},
						],
					},
				})
			} catch (err)
			{
				console.error("Error sending message:", err)
			}
		}
	}

	/*
		Handle requests from interactive components
		See https://discord.com/developers/docs/interactions/message-components#responding-to-a-component-interaction
	*/
	if (type === InteractionType.MESSAGE_COMPONENT)
	{
		const componentId = data.custom_id

		if (componentId == "rolethingyeah")
		{
			const guild = req.body.guild_id
			const member = req.body.member
			const userId = member.user.id
			const role = data.values[0]

			for(const thing of member.roles)
			{
				const allRoles = getAllRoles()

				for(const a in allRoles)
				{
					if (thing == allRoles[a] && allRoles[a] != role)
					{
						ChangeUserRoles(guild, userId, thing, "remove")
					}
				}
			}

			ChangeUserRoles(guild, userId, role)

			try
			{
				res.send
				({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data:
					{
						content: "there we go",
						flags: InteractionResponseFlags.EPHEMERAL,
					},
				})
			} catch (err)
			{
				console.error("Error sending message:", err)
			}
		}
		if (componentId == "interest_crash")
		{
			const guild = req.body.guild_id
			const member = req.body.member
			const userId = member.user.id
			const crash_role = "688048858919469112" // crash interest role
			const spyro_role = "688050010965016671" // spyro interest role

			for(const thing of member.roles)
			{
				if (thing == spyro_role)
				{
					ChangeUserRoles(guild, userId, spyro_role, "remove")
					ChangeUserRoles(guild, userId, crash_role)
					try
					{
						res.send
						({
							type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
							data:
							{
								content: "there we go",
								flags: InteractionResponseFlags.EPHEMERAL,
							},
						})
					} catch (err)
					{
						console.error("Error sending message:", err)
					}
					return
				}
				else if (thing == crash_role)
				{
					ChangeUserRoles(guild, userId, crash_role, "remove")
					try
					{
						res.send
						({
							type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
							data:
							{
								content: "there we go",
								flags: InteractionResponseFlags.EPHEMERAL,
							},
						})
					} catch (err)
					{
						console.error("Error sending message:", err)
					}
					return
				}
			}
			ChangeUserRoles(guild, userId, crash_role)
			try
			{
				res.send
				({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data:
					{
						content: "there we go",
						flags: InteractionResponseFlags.EPHEMERAL,
					},
				})
			} catch (err)
			{
				console.error("Error sending message:", err)
			}
		}
		if (componentId == "interest_spyro")
		{
			const guild = req.body.guild_id
			const member = req.body.member
			const userId = member.user.id
			const crash_role = "688048858919469112" // crash interest role
			const spyro_role = "688050010965016671" // spyro interest role

			for(const thing of member.roles)
			{
				if (thing == crash_role)
				{
					ChangeUserRoles(guild, userId, crash_role, "remove")
					ChangeUserRoles(guild, userId, spyro_role)
					try
					{
						res.send
						({
							type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
							data:
							{
								content: "there we go",
								flags: InteractionResponseFlags.EPHEMERAL,
							},
						})
					} catch (err)
					{
						console.error("Error sending message:", err)
					}
					return
				}
				else if (thing == spyro_role)
				{
					ChangeUserRoles(guild, userId, spyro_role, "remove")
					try
					{
						res.send
						({
							type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
							data:
							{
								content: "there we go",
								flags: InteractionResponseFlags.EPHEMERAL,
							},
						})
					} catch (err)
					{
						console.error("Error sending message:", err)
					}
					return
				}
			}
			ChangeUserRoles(guild, userId, spyro_role)
			try
			{
				res.send
				({
					type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
					data:
					{
						content: "there we go",
						flags: InteractionResponseFlags.EPHEMERAL,
					},
				})
			} catch (err)
			{
				console.error("Error sending message:", err)
			}
		}
	}
})

app.listen(PORT, () =>
{
	console.log('Listening on port', PORT)
})