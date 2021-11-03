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
import {Status} from "./Status";

@Entity()
export class Lead extends BaseEntity{
    @PrimaryColumn({
        type: "bigint"
    })
    @Index({ unique: true })
    ID: string;

    @Column({
        nullable:true
    })
    TITLE:string;

    @Column({
        nullable:true
    })
    HONORIFIC:string;

    @Column({
        nullable:true
    })
    NAME:string;

    @Column({
        nullable:true
    })
    SECOND_NAME:string;

    @Column({
        nullable:true
    })
    LAST_NAME:string;

    @Column({
        nullable:true
    })
    COMPANY_TITLE:string;

    @Column({
        nullable:true
    })
    COMPANY_ID:string;

    @Column({
        nullable:true
    })
    CONTACT_ID:string;

    @Column({
        nullable:true
    })
    IS_RETURN_CUSTOMER:string;

    @Column({
        nullable:true
    })
    BIRTHDATE:string;

    @Column({
        nullable:true
    })
    SOURCE_ID:string;

    @Column({
        nullable:true,
        type:"text"
    })
    SOURCE_DESCRIPTION:string;

    @Column({
        nullable:true
    })
    STATUS_ID:string;

    @Column({
        nullable:true,
        type:"text"
    })
    STATUS_DESCRIPTION:string;

    @Column({
        nullable:true
    })
    POST:string;

    @Column({
        nullable:true,
        type:"text"
    })
    COMMENTS:string;

    @Column({
        nullable:true
    })
    CURRENCY_ID:string;

    @Column({
        nullable:true
    })
    OPPORTUNITY:string;

    @Column({
        nullable:true
    })
    IS_MANUAL_OPPORTUNITY:string;

    @Column({
        nullable:true
    })
    HAS_PHONE:string;

    @Column({
        nullable:true
    })
    HAS_EMAIL:string;

    @Column({
        nullable:true
    })
    HAS_IMOL:string;

    @Column({
        nullable:true
    })
    ASSIGNED_BY_ID:string;

    @Column({
        nullable:true
    })
    CREATED_BY_ID:string;

    @Column({
        nullable:true
    })
    MODIFY_BY_ID:string;

    @Column({
        nullable:true,
        default: null,
        type: "date"
    })
    DATE_CREATE:Date | null;

    @Column({
        nullable:true,
        default: null,
        type: "date"
    })
    DATE_MODIFY:Date | null;

    @Column({
        nullable:true,
        default: null,
        type: "date"
    })
    DATE_CLOSED:Date | null

    @Column({
        nullable:true
    })
    STATUS_SEMANTIC_ID:string;

    @Column({
        nullable:true
    })
    OPENED:string;

    @Column({
        nullable:true
    })
    ORIGINATOR_ID:string;

    @Column({
        nullable:true
    })
    ORIGIN_ID:string;

    @Column({
        nullable:true
    })
    ADDRESS:string;

    @Column({
        nullable:true
    })
    ADDRESS_2:string;

    @Column({
        nullable:true
    })
    ADDRESS_CITY:string;

    @Column({
        nullable:true
    })
    ADDRESS_POSTAL_CODE:string;

    @Column({
        nullable:true
    })
    ADDRESS_REGION:string;

    @Column({
        nullable:true
    })
    ADDRESS_PROVINCE:string;

    @Column({
        nullable:true
    })
    ADDRESS_COUNTRY:string;

    @Column({
        nullable:true
    })
    ADDRESS_COUNTRY_CODE:string;

    @Column({
        nullable:true
    })
    ADDRESS_LOC_ADDR_ID:string;

    @Column({
        nullable:true
    })
    UTM_SOURCE:string;

    @Column({
        nullable:true
    })
    UTM_MEDIUM:string;

    @Column({
        nullable:true
    })
    UTM_CAMPAIGN:string;

    @Column({
        nullable:true
    })
    UTM_CONTENT:string;

    @Column({
        nullable:true
    })
    UTM_TERM:string;

}