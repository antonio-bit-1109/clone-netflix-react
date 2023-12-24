import { Component } from "react";

class SettingsPage extends Component {
    render() {
        return (
            <div className="bg-settings text-light pt-custom">
                <main className="container-fluid container-lg my-4 py-3">
                    <section id="settings">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-8">
                                <h4>Account</h4>
                                <hr />
                                <div className="row mt-3 mb-3">
                                    <div className="col-12 col-md-3 col-lg-4 col-xxl-3">
                                        <div className="d-flex d-md-inline-block justify-content-between mb-2 mb-md-0">
                                            <h5 className="text-gray text-uppercase text-nowrap fs-6 fw-normal">
                                                Membership &amp; Billing
                                            </h5>
                                            <button className="btn btn-outline-secondary text-nowrap opacity-50 rounded-0 d-none d-sm-inline-block px-2 py-0 py-md-2 px-md-3 px-lg-4">
                                                Cancel Membership
                                            </button>
                                            <a
                                                className="d-inline-block d-sm-none page-link link-danger text-end fs-6"
                                                href="#"
                                            >
                                                X cancel
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-8 col-xxl-9">
                                        <div className="row">
                                            <div className="col-6">
                                                <div>
                                                    <p className="fw-bold mb-1">student@strive.school</p>
                                                    <p className="text-gray mb-1">Password: ********</p>
                                                    <p className="text-gray mb-0">Phone: 321 044 1279</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Change account email
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Change password
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info" href="#">
                                                                Change phone number
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                <div>
                                                    <p className="fst-italic fw-bold d-inline-block">Paypal</p>
                                                    <p className="fw-bold d-inline ps-2">admin@strive.school</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Update payment info
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info" href="#">
                                                                Billing details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-6"></div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Redeem gift card or promo code
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info" href="#">
                                                                Where to buy gift cards
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-12 col-md-3 col-lg-4 col-xxl-3">
                                        <div className="mb-3 mb-md-0">
                                            <h5 className="text-gray text-uppercase fs-6 fw-normal">Plan details</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-8 col-xxl-9">
                                        <div className="row">
                                            <div className="col-6">
                                                <div>
                                                    <p className="fw-bold d-inline pe-2">Premium</p>
                                                    <img src="./assets/ultrahd.jpg" alt="ultra hd" width="90" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-end">
                                                    <a className="page-link link-info" href="#">
                                                        Change plan
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-12 col-md-3 col-lg-4 col-xxl-3">
                                        <div className="mb-3 mb-md-0">
                                            <h5 className="text-gray text-uppercase fs-6 fw-normal">Settings</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-8 col-xxl-9">
                                        <div className="row">
                                            <div className="col-6">
                                                <div>
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Parental controls
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Test participation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Manage download devices
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Activate a device
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Recent device streaming activity
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info" href="#">
                                                                Sign out of all devices
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-6"></div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row mt-3">
                                    <div className="col-12 col-md-3 col-lg-4 col-xxl-3">
                                        <div className="mb-3 mb-md-0">
                                            <h2 className="text-gray text-uppercase fs-6 fw-normal">My profile</h2>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-8 col-xxl-9">
                                        <div className="row">
                                            <div className="col-12 col-sm">
                                                <div>
                                                    <img
                                                        className="pe-2"
                                                        src="./assets/avatar.png"
                                                        alt="avatar"
                                                        width="30"
                                                    />
                                                    <p className="d-inline fw-bold text-nowrap">Strive Student</p>
                                                    <ul className="list-unstyled mt-3">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Language
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Playback settings
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Subtitle appearance
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-2 col-lg-3"></div>
                                            <div className="col-12 col-sm align-self-center">
                                                <div>
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Viewing activity
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Ratings
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm">
                                                <div className="text-end">
                                                    <ul className="list-unstyled mb-0">
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Manage profiles
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="page-link link-info mb-1" href="#">
                                                                Add profile email
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default SettingsPage;
