import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface BookingDialogProps {
  children?: React.ReactNode;
  buttonText?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  asChild?: boolean;
}

const BookingDialog = ({ 
  children, 
  buttonText = "Записаться", 
  variant = "default",
  size = "default",
  className = "",
  asChild = false
}: BookingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ageGroup: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", { ...formData, date });
  };

  return (
    <Dialog>
      <DialogTrigger asChild={asChild || !!children}>
        {children || (
          <Button variant={variant} size={size} className={className}>
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Запись на занятие</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами для подтверждения записи
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя *</Label>
              <Input
                id="name"
                placeholder="Анна Иванова"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="anna@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ageGroup">Возраст малыша *</Label>
              <Select
                value={formData.ageGroup}
                onValueChange={(value) => setFormData({ ...formData, ageGroup: value })}
                required
              >
                <SelectTrigger id="ageGroup">
                  <SelectValue placeholder="Выберите возрастную группу" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-6">0-6 месяцев</SelectItem>
                  <SelectItem value="6-12">6-12 месяцев</SelectItem>
                  <SelectItem value="12-24">1-2 года</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Выберите дату занятия *</Label>
              <div className="border rounded-3xl p-4 bg-muted/30">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={ru}
                  disabled={(date) => date < new Date()}
                  className="rounded-2xl mx-auto"
                />
                {date && (
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full">
                      <Icon name="Calendar" size={16} />
                      <span className="font-semibold">
                        {format(date, "d MMMM yyyy", { locale: ru })}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Комментарий</Label>
              <Input
                id="comment"
                placeholder="Есть ли особые пожелания или вопросы?"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              />
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-4 space-y-2">
            <div className="flex items-start gap-2">
              <Icon name="Info" size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                После отправки заявки мы свяжемся с вами в течение 2 часов для подтверждения времени занятия
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="submit" size="lg" className="flex-1 rounded-full">
              <Icon name="Send" className="mr-2" size={20} />
              Отправить заявку
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
