const AdminLayout = ({ children, title }) => {
  return (
    <>
      <div className="flex-grow-1 p-4">
        <div className="mb-5">
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
