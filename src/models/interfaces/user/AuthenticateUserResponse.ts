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
    ssoAccountId: number;
    uaeIdNumber?: string;
    userName: string;
    email: string;
    mobile: string;
    participantNameAr: string;
    participantNameEn: string;
    roleId: number;
    cardNumber?: string;
    isUserVerified: boolean;
    realEstateNumber?: string;
    authorityId?: number;
};


export type AuthenticateUserResponse = BaseResponse<UserResponse>;
