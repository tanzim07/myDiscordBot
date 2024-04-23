/*
 * File           : old.command.jss
 * Project        : mydiscordbot
 * Created Date   : Tu 23 Apr 2024 10:50:03
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
  const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
      options: [
        {
          name: 'name',
          type: 3,
          description: 'Your name',
          required: true,
          choices: [
            {
              name: 'tanzim',
              value: 'tanzim',
            },
            {
              name: 'ahmed',
              value: 'ahmed',
            },
          ],
        },
        {
          name: 'age',
          type: 3,
          description: 'Your Age',
          required: false,
          choices: [
            {
              name: '25',
              value: '25',
            },
            {
              name: '27',
              value: '27',
            },
          ],
        },
      ],
    },
  ];