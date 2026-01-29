import { Link } from "react-router-dom";
import { User, CheckCircle, MapPin, Building2 } from "lucide-react";
import mtbLogo from "@/assets/mtb-logo.png";

interface ProfileCardProps {
  name?: string;
  designation?: string;
  department?: string;
  location?: string;
  userId?: string;
  avatarUrl?: string;
  isVerified?: boolean;
}

export function ProfileCard({
  name = "Roni Shikder",
  designation = "Unit Head, Enterprise Solutions,",
  department = "CBS Integration & Development...",
  location = "Dhaka",
  userId = "C2140",
  avatarUrl,
  isVerified = true,
}: ProfileCardProps) {
  return (
    <div className="profile-card">
      {/* Gradient header background */}
      <div className="profile-card-header"></div>
      
      {/* Avatar section */}
      <div className="profile-avatar-wrapper">
        <Link to="/profile" className="text-decoration-none">
          <div className="profile-avatar">
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} />
            ) : (
              <User className="text-secondary" style={{ width: 28, height: 28 }} />
            )}
          </div>
        </Link>
      </div>

      {/* Profile Info */}
      <div className="text-center px-3 pb-3 pt-2">
        {/* Name with verification badge */}
        <Link to="/profile" className="text-decoration-none">
          <h6 className="mb-0 d-inline-flex align-items-center gap-1" style={{ color: 'var(--foreground)' }}>
            <span className="fw-semibold">{name}</span>
            {isVerified && (
              <CheckCircle className="verified-badge" style={{ width: 14, height: 14 }} />
            )}
          </h6>
        </Link>

        {/* Designation */}
        <p className="small text-muted mb-0 mt-1" style={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
          {designation}
          <br />
          {department}
        </p>

        {/* Location */}
        <p className="d-flex align-items-center justify-content-center gap-1 text-muted mb-2 mt-1" style={{ fontSize: '0.75rem' }}>
          <MapPin style={{ width: 12, height: 12 }} />
          {location}
        </p>

        {/* Company */}
        <div className="d-flex align-items-center justify-content-center gap-2 pt-2 border-top" style={{ borderColor: 'var(--border-color)' }}>
          <img src={mtbLogo} alt="MTB" style={{ height: 16 }} className="object-fit-contain" />
          <span className="small fw-medium" style={{ color: 'var(--foreground)', fontSize: '0.75rem' }}>
            Mutual Trust Bank PLC
          </span>
        </div>
      </div>
    </div>
  );
}
