"use client"

// pages/MembershipsPage.js


const MembershipCard = ({ title, price, items }) => (
  <div
   
    className="bg-white p-6 rounded-lg shadow-md mb-4 mx-2"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{`$${price}/month`}</p>
    <ul className="text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const MembershipsPage = () => {
  return (
    <div>
      {/* Other content */}
      <div className="bg-blue-500 text-white py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Membership Prices</h2>
        <div className="flex flex-col md:flex-row justify-center">
          <MembershipCard
            title="Basic"
            price={30}
            items={[
              "Access to gym equipment",
              "Group fitness classes",
              "Locker room access",
              "Personal training sessions available",
              "24/7 access",
            ]}
          />
          <MembershipCard
            title="Premium"
            price={50}
            items={[
              "All Basic features",
              "Sauna and spa access",
              "Nutritional counseling",
              "Unlimited group classes",
              "Priority scheduling for personal training",
            ]}
          />
          <MembershipCard
            title="Ultimate"
            price={80}
            items={[
              "All Premium features",
              "Private workout space",
              "Free massage sessions",
              "VIP events and workshops",
              "Complimentary merchandise",
            ]}
          />
        </div>
      </div>
      {/* Other content */}
    </div>
  );
};

export default MembershipsPage;
