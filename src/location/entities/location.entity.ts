import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
    @PrimaryGeneratedColumn()
id: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column({ default: true })
    isActive: boolean;
}
