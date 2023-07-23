import 'dotenv/config';
import express from 'express';
import
{
	InteractionType,
	InteractionResponseType,
	InteractionResponseFlags,
	MessageComponentTypes,
	ButtonStyleTypes,
} from 'discord-interactions';
import { VerifyDiscordRequest, DiscordRequest, ChangeUserRoles } from './utils.js';
import { getRoleOptions } from "./roles.js"

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Store for in-progress games. In production, you'd want to use a DB
// const activeGames = {};

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 */
app.post('/interactions', async function (req, res)
{
	// Interaction type and data
	const { type, id, data } = req.body;

	/**
	 * Handle verification requests
	 */
	if (type === InteractionType.PING)
	{
		return res.send({ type: InteractionResponseType.PONG });
	}

	/**
	 * Handle slash command requests
	 * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
	 */
	if (type === InteractionType.APPLICATION_COMMAND)
	{
		const { name } = data;

		// generate role menu message
		if (name === 'role_menu')
		{
			// Send a message into the channel where command was triggered from
			return res.send
			({
				type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
				data:
				{
					// Fetches a random emoji to send from a helper function
					content: "hi",
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
									options: getRoleOptions(),
								},
							],
						},
					],
				},
			});
		}
	}

	/*
		Handle requests from interactive components
		See https://discord.com/developers/docs/interactions/message-components#responding-to-a-component-interaction
	*/
	if (type === InteractionType.MESSAGE_COMPONENT)
	{
		const componentId = data.custom_id;

		if (componentId == "rolethingyeah")
		{
			const guild = req.body.guild_id
			const userId = req.body.member.user.id
			const role = data.values[0]

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
	}
});

app.listen(PORT, () =>
{
	console.log('Listening on port', PORT);
});
