import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserAdminEntity1669916367512 implements MigrationInterface {
    name = 'createUserAdminEntity1669916367512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_admin\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_817b0a7067f6af076d1bf65ca1\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_817b0a7067f6af076d1bf65ca1\` ON \`user_admin\``);
        await queryRunner.query(`DROP TABLE \`user_admin\``);
    }

}
