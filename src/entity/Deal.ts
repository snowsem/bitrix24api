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
export class Deal extends BaseEntity{

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
    TYPE_ID:string;
    @Column({
        nullable:true
    })
    PROBABILITY:string;
    @Column({
        nullable:true
    })
    STAGE_ID:string;
    @Column({
        nullable:true
    })
    CURRENCY_ID:string;
    @Column({
        nullable:true,
        precision: 19,
        scale: 2,
        type: "decimal"
    })
    OPPORTUNITY:string;

    @Column({
        nullable:true
    })
    IS_MANUAL_OPPORTUNITY:string;

    @Column({
        nullable:true
    })
    TAX_VALUE:string;

    @Column({
        nullable:true
    })

    LEAD_ID:string;
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
    QUOTE_ID:string;


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
        nullable:true
    })
    OPENED:string;

    @Column({
        nullable:true
    })
    CLOSED:string;

    @Column({
        nullable:true,
        type: "text"
    })
    COMMENTS:string;

    @Column({
        nullable:true
    })
    ADDITIONAL_INFO:string;

    @Column({
        nullable:true
    })
    LOCATION_ID:string;

    @Column({
        nullable:true
    })
    CATEGORY_ID:string;

    @Column({
        nullable:true
    })
    STAGE_SEMANTIC_ID:string;

    @Column({
        nullable:true
    })
    IS_NEW:string;

    @Column({
        nullable:true
    })
    IS_RECURRING:string;

    @Column({
        nullable:true
    })
    IS_RETURN_CUSTOMER:string;

    @Column({
        nullable:true
    })
    IS_REPEATED_APPROACH:string;

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
    ORIGINATOR_ID:string;

    @Column({
        nullable:true
    })
    ORIGIN_ID:string;

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

    @Column({
        nullable:true,
        default: null,
        type: "date"
    })
    BEGINDATE:Date | null;

    @Column({
        nullable:true,
        default: null,
        type: "date"
    })
    CLOSEDATE:Date | null;

    //дата договора
    @Column({
        nullable:true,
        default: null,
        type: "date"
    })
    UF_CRM_1606396719298:Date | null;

    // @OneToOne(type => Status)
    // @JoinColumn({name : 'STAGE_ID', referencedColumnName: 'STATUS_ID'})
    // STATUS: Status;

}