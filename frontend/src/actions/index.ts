import { STATUS } from '@/helpers/constants';
import addCookie from '@/utils/addCookie';
import deleteCookie from '@/utils/deleteCookie';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    setCookies: defineAction({
        input: z.object({
            email: z.string().email(),
            token: z.string(),
            role: z.string(),
        }),
        handler: async (input, context) => {
            addCookie(context,input)
            return STATUS.SUCCESS;
        },
    }),
    getCookies: defineAction({
        input: z.object({}),
        handler: async (input , context) => {
            return  context.cookies.get('user')
        },
    }),
    clearCookies: defineAction({
        input: z.object({}),
        handler: async (input , context) => {
            deleteCookie(context)
            return STATUS.SUCCESS
        },
    })
}