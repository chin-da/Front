export const CheckBoxInactive = ({ size = 18, viewBox = '0 0 22 22', color = '#CCCCCC' }) => {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none">
      <rect x="0" y="0" rx="4" width={22} height={22} fill={color} />
      <rect x="1" y="1" rx="3" width={20} height={20} fill="#FFFFFF" />
    </svg>
  );
};

CheckBoxInactive.displayName = 'CheckBoxInactive';
