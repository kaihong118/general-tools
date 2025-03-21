/**
 * String Helper Testing
 */

import StringHelper from '../utils/StringHelper';

const stringArr = [
  'program_name',
  'trans_type',
  'currency',
  'amount',
  'post_balance',
  'remarks',
  'created_by',
  'created_date',
  'last_modified_date',
];

for (const string of stringArr) {
  console.log(`${StringHelper.snakeToCamel(string)}: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '${StringHelper.snakeToSpace(string)}',
        field: '${string}',
      },`);
}
