import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const ROLE_MENU_COMMAND = {
  name: 'role_menu',
  description: 'Basic command',
  type: 1,
};

const ALL_COMMANDS = [ROLE_MENU_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);