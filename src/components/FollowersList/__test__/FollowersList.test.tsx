import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Testing FollowersList component", () => {
  beforeAll(() => {
    console.log("EXECUTED ONCE BEFORE ALL TEST");
  });

  beforeEach(() => {
    console.log("EXECUTED BEFORE EACH TEST");
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    console.log("EXECUTED ONCE AFTER ALL TEST");
  });

  it("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    //screen.debug()
    expect(followerDivElements.length).toBe(5);
  });
});
