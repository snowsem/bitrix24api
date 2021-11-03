import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    Index,
    PrimaryColumn,
    Generated,
    OneToOne,
    JoinColumn
} from 'typeorm';

@Entity()
export class Status extends BaseEntity{
    @PrimaryColumn({
        type: "bigint"
    })
    @Index({ unique: true })
    ID: string;

    @Column({
        nullable:true
    })
    ENTITY_ID:string;

    @Column({
        nullable:true
    })
    STATUS_ID:string;

    @Column({
        nullable:true
    })
    NAME:string;

    @Column({
        nullable:true
    })
    NAME_INIT:string;

    @Column({
        nullable:true
    })
    SORT:string;

    @Column({
        nullable:true
    })
    SYSTEM:string;

    @Column({
        nullable:true
    })
    CATEGORY_ID:string;

    @Column({
        nullable:true
    })
    COLOR:string;

    @Column({
        nullable:true
    })
    SEMANTICS:string;

    @Column({
        nullable:true,
        type: "json"
    })
    EXTRA:string;

}