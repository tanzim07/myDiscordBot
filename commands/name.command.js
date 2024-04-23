/*
 * File           : order.command.js
 * Project        : mydiscordbot
 * Created Date   : Tu 23 Apr 2024 10:49:07
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Tue Apr 23 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { SlashCommandBuilder } from '@discordjs/builders';

const nameCommand = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Insert your details!')
  .addStringOption((option) =>
    option.setName('name').setDescription('Select your favorite food').setRequired(true).setChoices(
      {
        name: 'Tanzim',
        value: 'tanzim',
      },
      {
        name: 'Ahmed',
        value: 'ahmed',
      }
    )
  )
  .addStringOption((option) =>
    option.setName('age').setDescription('Select your age').setRequired(true).setChoices(
      {
        name: '25',
        value: '25',
      },
      {
        name: '28',
        value: '28',
      }
    )
  );

export default nameCommand.toJSON();
