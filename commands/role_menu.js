const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, SlashCommandBuilder } = require('discord.js')

module.exports =
{
	data: new SlashCommandBuilder()
		.setName(`role_menu`)
		.setDescription(`Generate role menu for the Crash/Spyro Wikis Discord server.`),

	async execute(interaction)
	{
		const select = new StringSelectMenuBuilder()
			.setCustomId('rolethingyeah')
			//.setPlaceholder('Make a selection!')
			.setMaxValues(1)
			.setMinValues(1)
			.addOptions
			(
				new StringSelectMenuOptionBuilder()
					.setLabel('Team Crash')
					.setDescription('I like Crash Bandicoot!')
					.setValue('1132130033637527622'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Team Cortex')
					.setDescription('I like Dr. Neo Cortex!')
					.setValue('1132665983488753747'),
			)

		const row = new ActionRowBuilder()
			.addComponents(select)

		await interaction.reply
		(
			{
				content: `hey guys i'm back`,
				components: [row],
			}
		)
		await interaction.followUp('sup')
	},
}