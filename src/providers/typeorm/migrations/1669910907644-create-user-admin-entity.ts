import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserAdminEntity1669910907644 implements MigrationInterface {
    name = 'createUserAdminEntity1669910907644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admin_user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_840ac5cd67be99efa5cd989bf9\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_840ac5cd67be99efa5cd989bf9\` ON \`admin_user\``);
        await queryRunner.query(`DROP TABLE \`admin_user\``);
    }

}
