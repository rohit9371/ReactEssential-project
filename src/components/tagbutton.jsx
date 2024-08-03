function TagButton({ children,isSelected,...props }){
  console.log("tagButton");
    return (
    <li>
    <button className={isSelected ? 'active' : undefined} {...props}>{ children }</button>
</li>
  );
}
export default TagButton;