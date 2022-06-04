﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Carsharing
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Rent.
    /// </summary>
    // *** Start programmer edit section *** (Rent CustomAttributes)

    // *** End programmer edit section *** (Rent CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("RentE", new string[] {
            "StartOfRent as \'Start of rent\'",
            "EndOfRent as \'End of rent\'",
            "Duration as \'Duration\'",
            "PricePlan as \'Price plan\'",
            "RentedCar as \'Rented car\'",
            "RentedCar.CarNumber as \'Car number\'",
            "DropAt as \'Drop at\'",
            "DropAt.Address as \'Address\'",
            "RentAt as \'Rent at\'",
            "RentAt.Address as \'Address\'"}, Hidden=new string[] {
            "RentedCar.CarNumber",
            "DropAt.Address",
            "RentAt.Address"})]
    [MasterViewDefineAttribute("RentE", "RentedCar", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "CarNumber")]
    [MasterViewDefineAttribute("RentE", "DropAt", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Address")]
    [MasterViewDefineAttribute("RentE", "RentAt", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Address")]
    [View("RentL", new string[] {
            "StartOfRent as \'Start of rent\'",
            "EndOfRent as \'End of rent\'",
            "Duration as \'Duration\'",
            "PricePlan as \'Price plan\'",
            "RentedCar.CarNumber as \'Car number\'",
            "DropAt.Address as \'Address\'",
            "RentAt.Address as \'Address\'"})]
    public class Rent : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fStartOfRent;
        
        private System.DateTime fEndOfRent;
        
        private double fDuration;
        
        private IIS.Carsharing.tPlan fPricePlan;
        
        private IIS.Carsharing.Park fDropAt;
        
        private IIS.Carsharing.Park fRentAt;
        
        private IIS.Carsharing.Car fRentedCar;
        
        // *** Start programmer edit section *** (Rent CustomMembers)

        // *** End programmer edit section *** (Rent CustomMembers)

        
        /// <summary>
        /// StartOfRent.
        /// </summary>
        // *** Start programmer edit section *** (Rent.StartOfRent CustomAttributes)

        // *** End programmer edit section *** (Rent.StartOfRent CustomAttributes)
        public virtual System.DateTime StartOfRent
        {
            get
            {
                // *** Start programmer edit section *** (Rent.StartOfRent Get start)

                // *** End programmer edit section *** (Rent.StartOfRent Get start)
                System.DateTime result = this.fStartOfRent;
                // *** Start programmer edit section *** (Rent.StartOfRent Get end)

                // *** End programmer edit section *** (Rent.StartOfRent Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.StartOfRent Set start)

                // *** End programmer edit section *** (Rent.StartOfRent Set start)
                this.fStartOfRent = value;
                // *** Start programmer edit section *** (Rent.StartOfRent Set end)

                // *** End programmer edit section *** (Rent.StartOfRent Set end)
            }
        }
        
        /// <summary>
        /// EndOfRent.
        /// </summary>
        // *** Start programmer edit section *** (Rent.EndOfRent CustomAttributes)

        // *** End programmer edit section *** (Rent.EndOfRent CustomAttributes)
        public virtual System.DateTime EndOfRent
        {
            get
            {
                // *** Start programmer edit section *** (Rent.EndOfRent Get start)

                // *** End programmer edit section *** (Rent.EndOfRent Get start)
                System.DateTime result = this.fEndOfRent;
                // *** Start programmer edit section *** (Rent.EndOfRent Get end)

                // *** End programmer edit section *** (Rent.EndOfRent Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.EndOfRent Set start)

                // *** End programmer edit section *** (Rent.EndOfRent Set start)
                this.fEndOfRent = value;
                // *** Start programmer edit section *** (Rent.EndOfRent Set end)

                // *** End programmer edit section *** (Rent.EndOfRent Set end)
            }
        }
        
        /// <summary>
        /// Duration.
        /// </summary>
        // *** Start programmer edit section *** (Rent.Duration CustomAttributes)

        // *** End programmer edit section *** (Rent.Duration CustomAttributes)
        public virtual double Duration
        {
            get
            {
                // *** Start programmer edit section *** (Rent.Duration Get start)

                // *** End programmer edit section *** (Rent.Duration Get start)
                double result = this.fDuration;
                // *** Start programmer edit section *** (Rent.Duration Get end)

                // *** End programmer edit section *** (Rent.Duration Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.Duration Set start)

                // *** End programmer edit section *** (Rent.Duration Set start)
                this.fDuration = value;
                // *** Start programmer edit section *** (Rent.Duration Set end)

                // *** End programmer edit section *** (Rent.Duration Set end)
            }
        }
        
        /// <summary>
        /// PricePlan.
        /// </summary>
        // *** Start programmer edit section *** (Rent.PricePlan CustomAttributes)

        // *** End programmer edit section *** (Rent.PricePlan CustomAttributes)
        public virtual IIS.Carsharing.tPlan PricePlan
        {
            get
            {
                // *** Start programmer edit section *** (Rent.PricePlan Get start)

                // *** End programmer edit section *** (Rent.PricePlan Get start)
                IIS.Carsharing.tPlan result = this.fPricePlan;
                // *** Start programmer edit section *** (Rent.PricePlan Get end)

                // *** End programmer edit section *** (Rent.PricePlan Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.PricePlan Set start)

                // *** End programmer edit section *** (Rent.PricePlan Set start)
                this.fPricePlan = value;
                // *** Start programmer edit section *** (Rent.PricePlan Set end)

                // *** End programmer edit section *** (Rent.PricePlan Set end)
            }
        }
        
        /// <summary>
        /// Rent.
        /// </summary>
        // *** Start programmer edit section *** (Rent.DropAt CustomAttributes)

        // *** End programmer edit section *** (Rent.DropAt CustomAttributes)
        [NotNull()]
        public virtual IIS.Carsharing.Park DropAt
        {
            get
            {
                // *** Start programmer edit section *** (Rent.DropAt Get start)

                // *** End programmer edit section *** (Rent.DropAt Get start)
                IIS.Carsharing.Park result = this.fDropAt;
                // *** Start programmer edit section *** (Rent.DropAt Get end)

                // *** End programmer edit section *** (Rent.DropAt Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.DropAt Set start)

                // *** End programmer edit section *** (Rent.DropAt Set start)
                this.fDropAt = value;
                // *** Start programmer edit section *** (Rent.DropAt Set end)

                // *** End programmer edit section *** (Rent.DropAt Set end)
            }
        }
        
        /// <summary>
        /// Rent.
        /// </summary>
        // *** Start programmer edit section *** (Rent.RentAt CustomAttributes)

        // *** End programmer edit section *** (Rent.RentAt CustomAttributes)
        [NotNull()]
        public virtual IIS.Carsharing.Park RentAt
        {
            get
            {
                // *** Start programmer edit section *** (Rent.RentAt Get start)

                // *** End programmer edit section *** (Rent.RentAt Get start)
                IIS.Carsharing.Park result = this.fRentAt;
                // *** Start programmer edit section *** (Rent.RentAt Get end)

                // *** End programmer edit section *** (Rent.RentAt Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.RentAt Set start)

                // *** End programmer edit section *** (Rent.RentAt Set start)
                this.fRentAt = value;
                // *** Start programmer edit section *** (Rent.RentAt Set end)

                // *** End programmer edit section *** (Rent.RentAt Set end)
            }
        }
        
        /// <summary>
        /// Rent.
        /// </summary>
        // *** Start programmer edit section *** (Rent.RentedCar CustomAttributes)

        // *** End programmer edit section *** (Rent.RentedCar CustomAttributes)
        [NotNull()]
        public virtual IIS.Carsharing.Car RentedCar
        {
            get
            {
                // *** Start programmer edit section *** (Rent.RentedCar Get start)

                // *** End programmer edit section *** (Rent.RentedCar Get start)
                IIS.Carsharing.Car result = this.fRentedCar;
                // *** Start programmer edit section *** (Rent.RentedCar Get end)

                // *** End programmer edit section *** (Rent.RentedCar Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Rent.RentedCar Set start)

                // *** End programmer edit section *** (Rent.RentedCar Set start)
                this.fRentedCar = value;
                // *** Start programmer edit section *** (Rent.RentedCar Set end)

                // *** End programmer edit section *** (Rent.RentedCar Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "RentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View RentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("RentE", typeof(IIS.Carsharing.Rent));
                }
            }
            
            /// <summary>
            /// "RentL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View RentL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("RentL", typeof(IIS.Carsharing.Rent));
                }
            }
        }
    }
}