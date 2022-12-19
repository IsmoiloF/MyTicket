import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CustomerAdressModule } from './customer_adress/customer_adress.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueModule } from './venue/venue.module';
import { SeatModule } from './seat/seat.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerCartModule } from './customer_cart/customer_cart.module';
import { BookingModule } from './booking/booking.module';
import { EventTypeModule } from './event_type/event_type.module';
import { TicketModule } from './ticket/ticket.module';
import { EventModule } from './event/event.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/admin.model';
import { Booking } from './booking/booking.model';
import { Customer } from './customer/customer.model';
import { CartModule } from './cart/cart.module';
import { HumanCategoryModule } from './human_category/human_category.module';
import { Cart } from './cart/cart.model';
import { Customer_Adress } from './customer_adress/customer_adress.model';
import { Customer_Cart } from './customer_cart/customer_cart.model';
import { Event } from './event/event.model';
import { Event_Type } from './event_type/event_type.model';
import { Human_Category } from './human_category/human_category.model';
import { Seat } from './seat/seat.model';
import { Seat_Type } from './seat_type/seat_type.model';
import { Ticket } from './ticket/ticket.model';
import { Venue } from './venue/venue.model';
import { Venue_Photo } from './venue_photo/venue_photo.model';
import { Venue_Type } from './venue_type/venue_type.model';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliverMethodModule } from './deliver_method/deliver_method.module';
import { DiscounCoupocModule } from './discoun_coupoc/discoun_coupoc.module';
import { StatusModule } from './status/status.module';
import { TicketTypeModule } from './ticket_type/ticket_type.module';
import { LangModule } from './lang/lang.module';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { DistictModule } from './distict/distict.module';
import { GenderModule } from './gender/gender.module';
import { Payment_Method } from './payment_method/payment_method.model';
import { Deliver_Method } from './deliver_method/deliver.method.model';
import { Discoun_Coupoc } from './discoun_coupoc/discoun_coupon.model';
import { Status } from './status/status.model';
import { Ticket_Type } from './ticket_type/ticket_type.model';
import { Lang } from './lang/lang.model';
import { Country } from './country/country.model';
import { Region } from './region/region.model';
import { District } from './distict/distickt.model';
import { Gender } from './gender/gender.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Booking,
        Customer,
        Cart,
        Customer_Adress,
        Customer_Cart,
        Event,
        Event_Type,
        Human_Category,
        Seat,
        Seat_Type,
        Ticket,
        Venue,
        Venue_Photo,
        Venue_Type,
        Payment_Method,
        Deliver_Method,
        Discoun_Coupoc,
        Status,
        Ticket_Type,
        Lang,
        Country,
        Region,
        District,
        Gender
      ],
      autoLoadModels: true,
      logging: false,
    }),
    EventModule,
    TicketModule,
    EventTypeModule,
    CartModule,
    BookingModule,
    CustomerCartModule,
    CustomerModule,
    SeatModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypeModule,
    SeatTypeModule,
    CustomerAdressModule,
    AdminModule,
    HumanCategoryModule,
    PaymentMethodModule,
    DeliverMethodModule,
    DiscounCoupocModule,
    StatusModule,
    TicketTypeModule,
    LangModule,
    CountryModule,
    RegionModule,
    DistictModule,
    GenderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
