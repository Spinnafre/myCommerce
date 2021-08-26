import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterProductCategory1629950295645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ONLY product_category ADD CONSTRAINT produto_categoria_pkey PRIMARY KEY (product_id, category_id)')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE ONLY product_category DROP CONSTRAINT produto_categoria_pkey')
    }

}
