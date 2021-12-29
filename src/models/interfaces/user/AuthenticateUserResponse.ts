// export type UserResponse = {
//     SsoAccountId: number;
//     UaeIdNumber: string;
//     UserName: string;
//     Email: string;
//     Mobile: string;
//     ParticipantNameAr: string;
//     ParticipantNameEn: string;
//     RoleId: number;
//     CardNumber: string;
//     IsUserVerified: boolean;
//     RealEstateNumber?: string;
//     AuthorityId?: number;
// };
import {BaseResponse} from "../base/baseResponse";

export interface UserResponse  {
    SsoAccountId: number;
    UaeIdNumber?: string;
    UserName: string;
    Email: string;
    Mobile: string;
    ParticipantNameAr: string;
    ParticipantNameEn: string;
    RoleId: number;
    CardNumber?: string;
    IsUserVerified: boolean;
    RealEstateNumber?: string;
    AuthorityId?: number;
};


export type AuthenticateUserResponse = BaseResponse<UserResponse>;
