import { Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm";



/** 
 * To help speed up this search, we can define an index on the “name” column 
 * using the @Index decorator. 
 */

@Entity()
// Composite index that contains Multiple columns// <-- 

export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Index()
    @Column()
    name: string;

    @Column('json')
    payload: Record<string, any>;
}
