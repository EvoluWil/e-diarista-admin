import { MigrationInterface, QueryRunner } from 'typeorm';

export class createServiceEntity1668536656881 implements MigrationInterface {
  name = 'createServiceEntity1668536656881';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`service\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`minValue\` int NOT NULL, \`timeInterval\` int NOT NULL, \`serviceFee\` int NOT NULL, \`restroomValue\` int NOT NULL, \`restroomInterval\` int NOT NULL, \`kitchenValue\` int NOT NULL, \`kitchenInterval\` int NOT NULL, \`roomValue\` int NOT NULL, \`roomInterval\` int NOT NULL, \`bedroomValue\` int NOT NULL, \`bedroomInterval\` int NOT NULL, \`backyardValue\` int NOT NULL, \`backyardInterval\` int NOT NULL, \`otherValue\` int NOT NULL, \`otherInterval\` int NOT NULL, \`icon\` varchar(255) NOT NULL, \`position\` int NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`service\``);
  }
}
