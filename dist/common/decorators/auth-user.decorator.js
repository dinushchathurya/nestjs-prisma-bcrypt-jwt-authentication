"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const AuthUser = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    delete user.password;
    return user;
});
exports.default = AuthUser;
//# sourceMappingURL=auth-user.decorator.js.map