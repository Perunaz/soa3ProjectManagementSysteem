import { DiscordMessengerAdapter } from "../src/messenger/discordMessengerAdapter";
import { DiscordService } from "../src/messenger/discordService";
import { EmailService } from "../src/messenger/emailService";
import { WhatsappMessengerAdapter } from "../src/messenger/whatsappMessengerAdapter";
import { WhatsappService } from "../src/messenger/whatsappService";

describe.each([
    [
      new EmailService(),
      new DiscordService(),
      new WhatsappService()

    ]
  ])("Project", (emailService, discordService, whatsappService) => {
    let emailServiceMessenger: EmailService;
    let discordServiceMessenger: EmailService;
    let whatsappServiceMessenger: EmailService;
    
    beforeEach(() => {
      emailServiceMessenger = emailService;
      discordServiceMessenger = DiscordMessengerAdapter.getInstance(discordService);
      whatsappServiceMessenger = WhatsappMessengerAdapter.getInstance(whatsappService);
    });

    test("should all be EmailService", () => {
        expect(emailServiceMessenger).toBeInstanceOf(EmailService);
        expect(discordServiceMessenger).toBeInstanceOf(EmailService);
        expect(whatsappServiceMessenger).toBeInstanceOf(EmailService);
    })

    test("should all return corresponding message", () => {  
        const logSpy = jest.spyOn(global.console, 'log');
        let name = "Rob";
        let message = "Hello";

        emailServiceMessenger.sendEmailMessage(name, message);
        expect(logSpy).toHaveBeenCalledWith("Sending email message to Rob: Hello");

        discordServiceMessenger.sendEmailMessage(name, message);
        expect(logSpy).toHaveBeenCalledWith("Sending discord message to Rob: Hello");

        whatsappServiceMessenger.sendEmailMessage(name, message);
        expect(logSpy).toHaveBeenCalledWith("Sending whatsapp message to Rob: Hello");

        expect(logSpy).toHaveBeenCalledTimes(3);

        logSpy.mockRestore();
    })
});