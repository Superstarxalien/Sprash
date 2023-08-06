import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const ROLES_CRASH_COMMAND = {
  name: 'roles_crash',
  description: 'Generate Crash Bandicoot roles menu for the Crash/Spyro Wikis Discord server.',
  type: 1,
};
const ROLES_SPYRO_COMMAND = {
  name: 'roles_spyro',
  description: 'Generate Spyro the Dragon roles menu for the Crash/Spyro Wikis Discord server.',
  type: 1,
};
const ROLES_INTEREST_COMMAND = {
  name: 'roles_interest',
  description: 'Generate series interest role buttons for the Crash/Spyro Wikis Discord server.',
  type: 1,
};

const ALL_COMMANDS = [ROLES_CRASH_COMMAND, ROLES_SPYRO_COMMAND, ROLES_INTEREST_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);